import { Button, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react'
import { invoke } from '@tauri-apps/api'
import { save } from '@tauri-apps/api/dialog'
import { useForm } from 'react-hook-form'

export default function Create() {

  const { register, handleSubmit } = useForm()

  const onSubmit = async(data) => {
    console.log("Submitted", data)

    const savePath = await save();
    if(!savePath) return;

    await invoke("save_file", {path: savePath, contents:data.content})
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
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

      <Button type='submit'>
        Create entry
      </Button>
    </form>
  )
}