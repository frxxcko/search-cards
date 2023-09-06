export const mapCard = (card) => {
    return (
        {
            id: card?.id,
            name: card?.name,
            image: card?.image_uris?.png,
            art_crop: card?.image_uris?.art_crop
        }
    )
} 