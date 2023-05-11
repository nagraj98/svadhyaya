// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use rusqlite::{Connection, Result};
use std::fs;

fn main() {
    create_all_tables().expect("Some error in creating tables");
    println!("Tables created successfully");

    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, save_file, create_new_entry,])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}

#[tauri::command]
fn save_file(path: String, contents: String) {
    println!("path is : {path} & contents are {contents}");
    fs::write(path, contents).expect("Failed to save the file");
}

#[tauri::command]
fn create_new_entry(author: String, content: String, tag: String) {
    create_new_entry_rust(author, content, tag).expect("unable to push into db");
}

#[derive(Debug)]
struct Entry {
    id: i32,
    author: String,
    content: String,
    tag: String,
}

fn establish_connection() -> Connection {
    let database_url = "mydatabase.sqlite";
    Connection::open(&database_url).expect(&format!("Error connecting to {}", database_url))
}

fn create_new_entry_rust(author: String, content: String, tag: String) -> Result<()> {
    let conn = establish_connection();

    conn.execute(
        "INSERT INTO entries (author, content, tag) VALUES (?1, ?2, ?3)",
        (author, content, tag),
        // (&me.name, &me.data),
    )?;

    let mut stmt = conn.prepare("SELECT id, author, content, tag FROM entries")?;
    let entries_iter = stmt.query_map([], |row| {
        Ok(Entry {
            id: row.get(0)?,
            author: row.get(1)?,
            content: row.get(2)?,
            tag: row.get(3)?,
        })
    })?;

    for entry in entries_iter {
        println!("Found entry {:?}", entry.unwrap());
    }

    Ok(())
}

fn create_all_tables() -> Result<()> {
    let conn = establish_connection();

    conn.execute(
        "CREATE TABLE IF NOT EXISTS entries (
            id    INTEGER PRIMARY KEY,
            author  TEXT NOT NULL,
            content  TEXT,
            tag TEXT
        )",
        (), // empty list of parameters.
    )?;

    Ok(())
}
