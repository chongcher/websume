const monthNames = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function getDisplayDateFromPhoto(date) {
    let year = date.year || '';
    let month = monthNames[date.month || 0];
    let day = date.day || '';

    return (month === '' ? '' : day ) + ' ' + month + ' ' + year
}

export function getPostBodyPreview(post) {
    let bodyText = [].concat(post.body.props.children).filter(child => {
        return typeof child === 'string';
    });
    return bodyText.join(" ");
}