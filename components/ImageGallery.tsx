"use client";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
function Gallery({ images }: any) {
	const convertToGalleryFormat = (images: any) => {
		return images.map((image: any) => ({
			original: image,
			thumbnail: image,
		}));
	};

	return (
		<ImageGallery
			items={convertToGalleryFormat(images)}
			lazyLoad={true}
			autoPlay={true}
		/>
	);
}

export default Gallery;
