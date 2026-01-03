export function generateHash(length: number): string {
    const options = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let hash = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * options.length);
        hash += options[randomIndex];
    }
    return hash;
}   