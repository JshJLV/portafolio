function Card({ item }) {
  return (
    <a href={item.link} target="_blank" className="bg-white rounded-lg">
      <div className="w-full">
        <img className="w-full rounded-t-lg" src={item.img} alt={item.title} />
      </div>
      <div className="border-t-2 border-gray-200">
        <p className="text-lg">{item.title}</p>
      </div>
    </a>
  );
}

export default Card;
