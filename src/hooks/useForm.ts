import { ChangeEvent, useState } from 'react';

export function useForm(initialValues: Record<string, string>) {
	const [values, setValues] = useState(initialValues);

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		const { name, value } = event.target;

		setValues({
			...values,
			[name]: value
		});
	}

	function resetForm() {
		setValues(initialValues);
	}

	return {
		values,
		handleChange,
		resetForm
	};
}
