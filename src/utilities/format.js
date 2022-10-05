const formatTitle = (title, limit) => {
    const words = title.split(' ');
    //26 letter including spaces and (...) is perfect for showing a title in one line
    const newTitle = [];
    let formedTitle;
    words.forEach(word => {
        if (newTitle.join(' ').length > limit) {
            formedTitle = `${newTitle.join(' ')}...`;
        } else {
            newTitle.push(word);
            formedTitle = title;
        }

    });

    return formedTitle;
}


export default formatTitle;