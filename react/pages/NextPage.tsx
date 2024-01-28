import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';
import ImagePicker, { Image as ImageType } from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { uploadImages } from '../http/ImageUploadRequest.jsx'


const NextPage: React.FC = () => {
    const [selectedImages, setSelectedImages] = useState<string[]>([]);

    const handleImagePicker = async () => {
        try {
            const response = await ImagePicker.openPicker({
                multiple: true,
                mediaType: 'photo',
            });

            if (!response || response.length === 0) {
                console.log('Image selection canceled.');
                return;
            }

            const selected = response.map((image: ImageType) => image.path);
            setSelectedImages([...selectedImages, ...selected]);
        } catch (error) {
            console.error('Error selecting images:', error);
        }
    };

    const handleUploadImages = async () => {
        try {
            await uploadImages(selectedImages);
        } catch (error) {
            console.error('Error uploading images:', error);
        }
    };


    const handleDeleteImage = (index: number) => {
        const newImages = [...selectedImages];
        newImages.splice(index, 1);
        setSelectedImages(newImages);
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerTextContainer}>
                <View style={styles.headerIconContainer}>
                    <Icon name='info' size={25} color="black"/>
                </View>
                <Text style={styles.headerText}>请上传考题图片</Text>
            </View>
            <View style={styles.buttonSetContainer}>
                <TouchableOpacity style={{...styles.pickButton, backgroundColor: 'skyblue'}} onPress={handleImagePicker}>
                    <Icon name='photo' size={25} color="white"/>
                    <Text style={styles.pickButtonText}>选择图片</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.pickButton} onPress={handleUploadImages}>
                    <Icon name='upload' size={25} color="white"/>
                    <Text style={styles.pickButtonText}>上传图片</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.imageContainer}>
                {selectedImages.map((image, index) => (
                    <View key={index} style={styles.imageWrapper}>
                        <Image source={{ uri: image }} style={styles.image} />
                        <TouchableOpacity
                            style={styles.deleteIcon}
                            onPress={() => handleDeleteImage(index)}
                        >
                            <Icon name="delete" size={12} color="red" />
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        height: Dimensions.get('window').height,
    },
    headerIconContainer: {
        justifyContent: "flex-start",
        paddingRight: 10,
    },
    headerTextContainer: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingLeft: 15,
        paddingTop: 15,
    },
    headerText: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonSetContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    pickButton: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: '#4CAF50',
        margin: 15,
        borderRadius: 5,
        marginBottom: 40,
        width: 120,
        height: 30,
    },
    pickButtonText: {
        color: 'white',
        fontSize: 18,
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        marginTop: 20,
        borderRadius: 30,
        borderColor: '#D0E0EC',
        marginHorizontal: 10,
    },
    imageWrapper: {
        position: 'relative',
    },
    image: {
        width: 100,
        height: 100,
        margin: 5,
    },
    deleteIcon: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 99,
        opacity: 0.7,
    },
});

export default NextPage;
