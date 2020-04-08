import { App } from './app'
import { connect } from './database'

async function main() {
    const app = new App();
    await app.listen();
}

main();