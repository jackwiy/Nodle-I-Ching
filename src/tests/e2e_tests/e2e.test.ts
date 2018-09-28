import { decode } from "../..";
import { loadJpeg } from "../fileHelpers";

const testsCount = 85;
const testPath = (testNumber: number) => `./src/tests/test_data/camera_images/${testNumber}.jpg`;

describe("End to End testing scenarios", async () => {
    for (let test = 1; test <= testsCount; ++test) {
        it("Decodes sample " + test + " correctly!", async () => {
            const img = await loadJpeg(testPath(test));
            const real = decode(img.data, img.width, img.height);
            console.log(real);
        });
    }
});