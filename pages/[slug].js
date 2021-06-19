

const Page = (props) => {
	switch (props.type) {
		case 'index':
			return <Home {...props} />
		
	}
}

export default Page