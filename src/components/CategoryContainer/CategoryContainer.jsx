import React from 'react'
import './CategoryContainer.scss'

export default function CategoryContainer({ data }) {
	return (
		<React.Fragment>
			{
				data?.map(({ title, imgUrl, id }) => (
					<div className='category-container' key={id}>
						<div
							className='background-image'
							style={{
								backgroundImage: `url(${imgUrl})`,
							}}
						/>
						<div className='category-body-container'>
							<h2>{title}</h2>
							<p>Shop Now</p>
						</div>
					</div>
				))
			}
		</React.Fragment>
	)
}
