import axios from 'axios';
import Config from '../config.json';


const uploadImages = async (images, navigation) => {

    console.log("processing images upload");
    try {
        if (images.length === 0) {
            console.log('No images to upload.');
            return;
        }

        const formData = new FormData();

        images.forEach((image, index) => {
            formData.append('files[]', {
                uri: image,
                type: 'image/jpeg',
                name: `image${index + 1}.jpg`,
            });
        });

        const apiUrl = `http://${Config.server.ip}:${Config.server.port}/process_images`;

        const response = await axios.post(apiUrl, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        if (response.status === 200) {

            navigation.navigate('ResultPage', {
                result: response.data.result,
            });

            console.log('Images uploaded successfully.');
            console.log(response.data.result);
        } else {
            console.error('Image upload failed.');
        }
    } catch (error) {
        console.error('Error uploading images:', error);
    }
};

export { uploadImages };
