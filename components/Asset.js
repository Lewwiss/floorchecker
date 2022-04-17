const Asset = ({ collection, name, image_url, floor }) => {
    return (
        <div>
            <p>{collection}</p>
            <img src={image_url} />
            <p>{name}</p>
            <p>{floor}</p>
        </div>
    );
};

export default Asset;