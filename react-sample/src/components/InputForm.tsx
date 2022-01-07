import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
    example: string;
};
export default function App() {
    const {
        register,
        handleSubmit,
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log('onSubmit:', data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('example')} />
            <input type="submit" />
        </form>
    );
}