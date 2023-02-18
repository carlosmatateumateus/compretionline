import Button from "./Button"

type User = {
  uid: string,
  email: string,
  photoURL: string
}

interface PostActionProps {
  user: User | undefined,
  saving: boolean
}

export default function PostAction({ user, saving }:PostActionProps) {
  return (
    <div className="flex items-center justify-end gap-3 max-md:justify-center mt-20">
    <a href="/">
      <span className="text-[#24242E] cursor-pointer">Cancelar</span>
    </a>
    {
      user?
      (
        <Button 
          type="submit"
        >
          Salvar producto
        {
          saving?
          (
            <span className="btn-ring" />
          ):
          null
        }
        </Button>
      ):
      (
        <Button 
          type="button"
          disabled
        >
          Salvar producto
        </Button>
      )
    }
  </div>
  )
}