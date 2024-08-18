import { ElementRef, FormEvent, useRef } from 'react';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { useForm } from './hooks/useForm';

export function App() {
	const { values, handleChange, resetForm } = useForm({ name: '', email: '' });
	const pRef = useRef<ElementRef<'input'>>(null);

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		if (pRef.current) {
			pRef.current.innerText = JSON.stringify(values);
		}

		(event.currentTarget.name as unknown as HTMLInputElement).focus();
		resetForm();
	}

	return (
		<div className="bg-zinc-100 text-zinc-900 min-h-screen flex justify-center items-center">
			<div className="flex flex-col items-center gap-y-4">
				<form onSubmit={handleSubmit} className="w-96 p-10 border rounded-md bg-zinc-50 space-y-4" >
					<div className="space-y-2">
						<Input
							type="text"
							name="name"
							placeholder="Name"
							value={values.name}
							onChange={handleChange}
						/>
						<Input
							type="email"
							name="email"
							placeholder="E-mail"
							value={values.email}
							onChange={handleChange}
						/>
					</div>

					<Button type="submit" className="w-full">Save</Button>
				</form>

				<p ref={pRef}></p>
			</div>
		</div>
	);
}
