export default function Footer(){

	return (
		<div className="font-bold flex flex-row w-full bg-zinc-200 shadow-md rounded-md justify-center items-center py-2">
			<p className="text-md">Copyright 2025 
				<a className="ml-2 underline text-blue-500 hover:text-blue-400 hover:cursor-pointer" href='https://liamhuynh.pages.dev' target="_blank" rel="noreferrer">
					Liam Huynh
				</a>
			</p>
			<a className="hover:cursor-pointer hover:scale-125 transition-transform duration-100" href='https://github.com/huynhli' target="_blank" rel="noreferrer"><img className="mx-2 w-5 h-5" src='/github_logo.png'/></a>
			<a className="hover:cursor-pointer hover:scale-125 transition-transform duration-100" href='https://www.linkedin.com/in/liam-huynh-91aa1a1a1/' target="_blank" rel="noreferrer"><img className="h-5 w-5" src='/linkedin_logo.png'/></a>
		</div>
	)
}
