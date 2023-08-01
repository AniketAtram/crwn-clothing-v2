import React, { Fragment } from 'react'
import './FormInput.scss'

export default function FormInput({ label, ...otherOptions }) {
	return (
		<Fragment>
			<div className='group'>
				<input className='form-input' {...otherOptions} />
				{
					label && (
						<label className={`${otherOptions.value.length ? 'shring' : ''} form-input-label`}>{label}</label>
					)
				}
			</div>
		</Fragment>
	)
}
