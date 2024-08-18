import { FormEvent } from 'react';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';

export function App() {
	function handleSubmit(event: FormEvent) {
		event.preventDefault();
	}

	return (
		<div className="bg-zinc-100 text-zinc-900 min-h-screen flex justify-center items-center">
			<form onSubmit={handleSubmit} className="w-96 p-10 border rounded-md bg-zinc-50 space-y-4" >
				<div className="space-y-2">
					<Input
						type="text"
						name="name"
						placeholder="Name"
					/>
					<Input
						type="email"
						name="email"
						placeholder="E-mail"
					/>
				</div>

				<Button type="submit" className="w-full">Save</Button>
			</form>
		</div>
	);
}
