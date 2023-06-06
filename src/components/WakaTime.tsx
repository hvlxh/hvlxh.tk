const EmbedGrid = ({ embeds }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {embeds.map((embed: string, index: number) => (
        <div key={index} className="bg-gray-200 p-4 rounded">
          <embed src={embed}></embed>
        </div>
      ))}
    </div>
  );
};

export default EmbedGrid;
