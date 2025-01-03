// components/Card.js
export default function Cards({ onClick, title }) {
	return (
		<div className="p-4 bg-gray-100 rounded-lg shadow-md cursor-pointer hover:bg-gray-200" onClick={onClick}>
			<h3 className="text-lg font-bold">{title}</h3>
		</div>
	);
}
