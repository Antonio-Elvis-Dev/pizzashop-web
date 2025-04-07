import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signUpZod = z.object({
  email: z.string().email(),
  managerName: z.string(),
  restaurantName: z.string(),
  phone: z.string(),
})

type SignUpForm = z.infer<typeof signUpZod>

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>()

  async function handleSignUp(data: SignUpForm) {
    console.log(data)
    // try {
    //   await new Promise((resolve) => setTimeout(resolve, 2000));
    //   toast.success('Enviamos um link de autenticação', {
    //     action: {
    //       label: 'Reenviar',
    //       onClick: () => {},
    //     },
    //   });
    // } catch (error) {
    //   toast.error('Credenciais inválidas');
    // }
  }
  return (
    <div className="p-8">
      <Button variant="ghost" asChild className="absolute right-8 top-8 ">
        <Link to="/sign-in" className="">
          Fazer login
        </Link>
      </Button>
      <div className="w-[350px] flex flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center ">
          <h1 className="text-2xl font-semibold tracking-tight">Criar conta grátis</h1>
          <p className="text-sm text-muted-foreground">
            Seja um parceiro e comece suas vendas.{' '}
          </p>
        </div>
        <form action="" className="space-y-4 gap-4" onSubmit={handleSubmit(handleSignUp)}>
          <div className="space-y-2">
            <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
            <Input id="restaurantName" type="text" {...register('restaurantName')} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="managerName">Seu nome</Label>
            <Input id="managerName" type="text" {...register('managerName')} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Seu e-mail</Label>
            <Input id="email" type="email" {...register('email')} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Seu telefone</Label>
            <Input id="phone" type="tell" {...register('phone')} />
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            Finalizar cadastro{' '}
          </Button>
        </form>
      </div>
    </div>
  )
}
