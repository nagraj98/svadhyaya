import { Button, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react'
import { invoke } from '@tauri-apps/api'
import { save } from '@tauri-apps/api/dialog'
import { useForm } from 'react-hook-form'

export default function Create() {

  const { register, handleSubmit } = useForm()

  const onSubmit = async(data) => {

    let res = await invoke("create_new_entry", {author:data.author, content: data.content, tag: data.tag})
    console.log("response : ", res)

  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>

      <FormControl>
        <FormLabel htmlFor='author'>
          Author
        </FormLabel>
        <Input
          id='author'
          placeholder='Who is writing this entry'
          {...register("author", {
            required: "author is required"
          })}
        />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor='content'>
          Content
        </FormLabel>
        <Textarea
          id='content'
          placeholder='Enter your text here'
          {...register("content", {
            required: "some content is required"
          })}
        />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor='tag'>
          Tag
        </FormLabel>
        <Input
          id='tag'
          placeholder='What type is this entry'
          {...register("tag", {
            // required: "tag is required"
          })}
        />
      </FormControl>

      <Button type='submit'>
        Create entry
      </Button>
    </form>
  )
}