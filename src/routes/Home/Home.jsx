import React from 'react'

import CategoryContainer from '../../components/CategoryContainer/CategoryContainer'

const categories = [
	{ id: 1, title: "Hats", imgUrl: "https://i.ibb.co/cvpntL1/hats.png" },
	{ id: 2, title: "Jackets", imgUrl: "https://i.ibb.co/px2tCc3/jackets.png" },
	{ id: 3, title: "Sneakers", imgUrl: "https://i.ibb.co/0jqHpnp/sneakers.png" },
	{ id: 4, title: "Womens", imgUrl: "https://i.ibb.co/GCCdy8t/womens.png" },
	{ id: 5, title: "Mens", imgUrl: "https://i.ibb.co/R70vBrQ/men.png" },
]

export default function Home() {
	return (
		<>
			<div className="categories-container">
				<CategoryContainer data={categories} />
			</div>
		</>
	)
}
