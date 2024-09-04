
const getOrigin = () => {
    return process.env.NEXT_PUBLIC_FRAMES_URL ||
        `http://localhost:3000`;
}

export { getOrigin };