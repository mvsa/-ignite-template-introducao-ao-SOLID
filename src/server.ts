import { app } from '.';

app.listen(3333, () => console.log(`Server running with version ${process.env.npm_package_version}`));
