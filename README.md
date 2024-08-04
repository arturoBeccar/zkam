# zkam

![https://img.shields.io/badge/license-MIT-green](https://img.shields.io/badge/license-MIT-green)

<p align="center">
  <img src="https://github.com/arturoBeccar/zkam/blob/documentation/assets/zkam-banner.png" alt="Is it a zkam? 🛸😱" width="100"/>
</p>

## Project Overview

Introducing zkam, the photo authentication app that leverages zero-knowledge proofs to ensure image ownership and integrity. With zkam, users can capture photos, automatically sign them with their unique digital signature, and verify ownership without compromising privacy. Our seamless process encrypts signature data directly into the image, generates a secure hash, and creates a zero-knowledge proof - all while maintaining the user's anonymity.

Whether you're a photographer protecting your work, a journalist verifying sources, or anyone concerned about image authenticity in the digital age, zkam provides a powerful, user-friendly solution for proving photo ownership and authenticity without revealing sensitive information.

## How does it work?

We use [steganography](https://github.com/NicolasBiondini/steganography-project/tree/main) to embed the hash of the original image into into our `zkam-proof` image, allowing the user to very the authenticity of the captured photo.

Our procedure works as follows:
- The user takes a photo with our app.
- With the user's private key a pseudo-random set of bytes is selected from the foto.
- This bytes location is used to store the hash of their complement in the original image.
- Only the user has the key to reveal the hash stored secretly in the image.
- The user can provide a zero knowledge proof that the hash stored in the secret bytes coincides with the hash of their complement in the image, thus proving that the image has not been altered.

## About

`zkam` is an open source project developed by [Nicolás Biondini](https://github.com/NicolasBiondini), [Yago Pajariño](https://github.com/yagopajarino), [Alejandro Almaraz](https://github.com/almaraz97) and [Arturo Beccar-Varela](https://github.com/arturoBeccar). With a background in computer science, math and blockchain, we are interested in the applications of zero-knowledge proofs to privacy and authentication.

## Acknowledgements

`zkam` was initially developed as part of the ZK/Privacy Track of the [Level Up Hackaton in Buenos Aires, 2024](https://taikai.network/ethargentina/hackathons/level-up-argentina-2024).
We attended this hackaton as part of our participation in the [PSE Core Program](https://pse.dev/en/programs), a six week program focused on learning the fundamentals and latest developemnts in programmable cryptography, zero-knowledge proofs and more.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.



