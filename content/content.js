// import posts
import phalcon from './posts/phalcon.jsx';

// import photos
import budcox from './photos/budcox.jsx';
import bestteam from './photos/bestteam.jsx';

const posts = [
    phalcon
].reverse();

const photos = [
    budcox,
    bestteam
].reverse();

export default { posts, photos };