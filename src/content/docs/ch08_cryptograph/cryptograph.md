---
title: Chapter 8 Cryptograph
---

Modern encryption technology is primarily divided into two categories: symmetric encryption and asymmetric encryption. As the name suggests, symmetric encryption uses the same key for both encryption and decryption. Asymmetric encryption, by contrast, cleverly employs a pair of keys—a public key and a private key—to perform these tasks. In real-world applications, such as web browsing or end-to-end encrypted messaging, these two methods are rarely used in isolation. Instead, they are combined into a hybrid encryption system that balances both security and efficiency.

To understand the logic behind this defense, we must first look back at the origins of cryptography, a field spanning thousands of years that began with symmetric encryption. The concept is remarkably straightforward: the same key serves both as the lock securing information inside a "safe" and the tool used to open it. As long as the communicating parties keep this shared key secure, outsiders cannot access the information. This simple model—relying on a single shared key—remained the dominant paradigm throughout most of human history.

![Symmetric Encryption](./images/Symmetric_encryption.png)

[Source: Symmetric Encryption 101](https://www.thesslstore.com/blog/symmetric-encryption-101-definition-how-it-works-when-its-used/)

## 1 Symmetric Encryption in the Age of Pen and Paper

In the era of pen and paper—long before the advent of electronic computers—humanity relied on simple writing tools and human ingenuity to develop two fundamental techniques for symmetric encryption: substitution and transposition.

Substitution is essentially a form of disguise; it replaces characters in the original text with other symbols according to specific mapping rules. Perhaps the most famous example is the Caesar cipher, which achieves basic secrecy by shifting the alphabet by a fixed number of positions (for instance, shifting by three places turns "A" into "D" and "B" into "E"). Using this method, "HELLO WORLD" becomes "KHOOR ZRUOG."

![caesar](./images/caesar.jpeg)

A slightly more advanced approach uses a randomized reference table as a key, mapping the 26 letters of the alphabet to a distinct set of 26 symbols. However, this type of "monoalphabetic" substitution remains highly vulnerable to frequency analysis—a technique that exploits predictable letter patterns in natural language. For example, "E" appears roughly 120 times more often than "Q," while "Z" accounts for only 0.07% of typical English text. To counter this vulnerability, cryptographers developed "polyalphabetic" substitution methods, such as the Vigenère cipher. By cycling through multiple mapping tables, the cipher encodes the same letter as different symbols depending on its position in the text, thwarting basic statistical attacks.

While substitution alters the "identity" of individual characters, transposition scrambles their "formation." Transposition ciphers leave the characters intact, concealing information solely by rearranging their order. For instance, a sender might write the original text into a matrix row by row, then read it out in a predetermined column sequence that serves as the key. This process systematically shuffles the text on paper: even if an interceptor recognizes every individual letter, the original message remains unintelligible because the sequence is broken. For example, arranging the 12 letters of "DATASECURITY" into a 3×4 matrix and reading it column by column can transform it into the scrambled sequence "AEIAUYDSRTCT."

![column](./images/column.jpeg)

In military and intelligence operations, these two techniques were often combined: substitution disguised the characters, while transposition disrupted their arrangement, producing a multi-layered defense.

The common thread among these manual methods is that both encryption and decryption rely on the exact same secret key—whether a shift value, a substitution table, or a column order. Pushing this concept to its absolute limit—where the key is completely random, as long as the plaintext itself, and used only once—yields the legendary one-time pad (OTP). Although mathematically proven to provide unbreakable, perfect secrecy, the OTP requires distributing a new, secure key of matching length prior to every transmission. That logistical burden makes it impractical for routine communication, reserving it almost exclusively for rare, ultra-high-security diplomatic or military channels.

## 2 Symmetric Encryption in the Computer Age

With the advent of the computer age, encryption technology did not abandon the principles of classical cryptography. Instead, mathematical rigor elevated the concepts of substitution and permutation—hailing from the era of pen and paper—to modern engineering standards. As data traverses silicon chips at speeds measured in nanoseconds, manual techniques can no longer withstand the scale of electronic computational power. To meet these challenges, Claude Shannon, the father of information theory, introduced two foundational pillars of modern cryptographic systems: confusion and diffusion. Far from being simple extensions of past logic, these concepts use precise mathematical structures to weave basic cryptographic units into a labyrinth that remains daunting to modern attackers.

### 2.1 Confusion and Diffusion

The essence of confusion lies in eliminating repeatable patterns; it represents the modern evolution of substitution. Confusion ensures that the mathematical relationship between the ciphertext and the key contains no discernible patterns. In practice, confusion acts as a mathematical black box: changes to the key or plaintext produce disproportionate, unpredictable changes in the ciphertext.

Diffusion, by contrast, ensures that a change in one part of the data affects the whole—an evolution of transposition and permutation. Diffusion triggers an "avalanche effect," where even a minute shift in the plaintext cascades across the entire ciphertext. Rather than merely reordering bits, the cipher applies multiple rounds of linear operations to disperse each bit of input across the entire block.

Consider a drop of food coloring in a glass of clear water: adding a single drop and stirring thoroughly disperses the pigment until the entire glass changes color. Similarly, diffusion spreads the statistical characteristics of the plaintext (such as character frequencies) evenly throughout the ciphertext. An attacker cannot isolate individual pieces of information from local patterns because every bit of output reflects a complex combination of all input bits and the key.

Repeating alternating layers of confusion and diffusion allows symmetric algorithms to build formidable cryptographic barriers. Confusion severs the statistical ties between the key and the ciphertext, preventing mathematical analysis from deducing the key. Diffusion eliminates localized patterns and creates extreme sensitivity to change. For example, encrypting "Pay $100" yields a block of pseudorandom data; under strong diffusion, altering the input to "Pay $101" does not change merely a few matching characters, but scrambles the entire ciphertext into completely different, unrelated noise.

### 2.2 Block Ciphers and Stream Ciphers

In practical engineering, confusion and diffusion are implemented primarily through two paradigms: block ciphers and stream ciphers. Each excels in a distinct domain, matching the two primary states of digital information: static data and dynamic streams.

A block cipher divides data into fixed-length segments, typically 128 or 256 bits. Operating much like a high-precision blender, the cipher subjects each block to repeated rounds of substitution and permutation. To prevent identical plaintext blocks from producing identical ciphertext blocks, modern implementations employ cipher modes that introduce interdependencies between successive blocks. This chaining ensures that statistical patterns are scrubbed across the entire file.

Because of its structural integrity, block encryption is the standard for data at rest. When backing up personal files or financial databases, processing latency is secondary to the cryptographic strength of individual records. Even if an adversary steals the physical drive, the data remains inaccessible, having been thoroughly scrambled through dozens of transformation rounds.

Stream ciphers, by contrast, operate on continuous data. Rather than partitioning information into fixed blocks, a stream cipher uses an internal state to generate a pseudorandom keystream. This keystream is combined with the plaintext bit-by-bit (typically using an XOR operation), instantly converting raw data into ciphertext. Security depends directly on the generator: the internal logic must be sufficiently complex that an eavesdropper cannot detect recurring patterns or predict future output bits.

Stream ciphers protect data in transit, excelling in low-latency environments such as encrypted voice or video calls. In live media, audio and video frames generate tiny, continuous streams of bits. Waiting to accumulate full 128- or 256-bit blocks would introduce unacceptable latency. Instead, a stream cipher encrypts data the moment it is produced, maintaining high throughput without sacrificing security.

### 2.3 Limitations of Symmetric Encryption

While symmetric encryption delivers exceptional throughput, it struggles in open, dynamic network environments involving untrusted parties. On its own, it cannot support a comprehensive security infrastructure due to three primary limitations.First is key distribution, often called the "messenger paradox." If two parties have never met and are separated by a network, exchanging a secret key securely over an open medium is difficult. Sending the key via an unencrypted channel exposes it to interception, compromising all subsequent traffic. This creates a circular dependency: securing communication requires a shared secret, but sharing that secret requires an already secure channel. While historical systems relied on physical couriers or in-person meetings, modern digital networks operating on millisecond scales require automated solutions.Second is key scalability, known as the "key explosion" problem. Symmetric cryptography requires a unique key for every distinct communicating pair. In a network of 100 participants where each pair communicates confidentially, the system requires 4,950 separate keys. For 10,000 users, that number balloons to nearly 50 million keys. Managing, distributing, and securely storing this many keys creates an operational burden that grows quadratically, making pure symmetric encryption unworkable for large public networks.Third is the lack of non-repudiation. Because both communicating parties possess the exact same key, symmetric encryption cannot uniquely identify the sender of a message. If a client transmits a funds transfer instruction to a bank, the bank uses the shared key to decrypt it. However, because both parties hold identical credentials, the bank cannot mathematically prove to an independent third party that the client authored the request rather than an insider at the bank. Anyone who can decrypt a symmetric payload can also forge one.Resolving these fundamental challenges requires asymmetric encryption, an innovation that decouples public transmission from private decryption.

## 2 Hashing Algorithms

Hashing algorithms are a fundamental component of modern cryptography, playing a crucial role in ensuring data integrity, authenticity, and security. A hashing algorithm is a mathematical function that takes input data of any size and generates a fixed-size output, known as a hash value or digest. This output is unique to the input data and is designed to be **irreversible**, meaning it is computationally infeasible to recreate the original input data from the hash value. The key characteristic of a hashing function is that it is a one-way function, meaning it is:

- Deterministic: Given the same input, it always produces the same output.
- Non-invertible: It is computationally infeasible to reverse-engineer the original input from the output hash value.

### 2.1 Hashing Algorithm Applications

#### 2.1.1 Data Integrity

Hashing ensures that data is not tampered with or altered during transmission or storage. For instance, when downloading a software update, a hash value is generated and sent along with the update. The recipient can recalculate the hash value and compare it with the sent value to ensure the update was not tampered with during transmission. An example is software downloading introduced in the next section.

#### 2.1.2 Password Storage

Hashing is used to store passwords securely, making it difficult for attackers to obtain the original password. When a user creates a password, a hash value is generated and stored instead of the actual password. When the user logs in, the input password is hashed and compared with the stored hash value to authenticate the user. This way, even if an attacker gains access to the stored hash values, they cannot obtain the original passwords.

![Password Hashing](./images/password_hashing.png)

[Source: Authgear](https://www.authgear.com/post/password-hashing-salting)

`bcrypt` in the above picture is a popular password hashing function because it allows the computational cost to be increased as computational power grows, enhancing security.

### 3.2 The Role of Hashing in Ensuring Data Integrity: A Case Study on Downloading Software

Data integrity is a critical aspect of ensuring the reliability and trustworthiness of digital information. With the increasing reliance on digital systems, it is essential to guarantee that data remains unaltered and uncorrupted during transmission and storage. Hashing is a widely used technique that plays a vital role in ensuring data integrity.

When downloading software, it is crucial to ensure that the file is not tampered with or altered during transmission. Hashing provides a robust solution to this problem. On the server-side, a hash value is generated using a hashing algorithm, such as `SHA-256`, for the software update file. This hash value is a unique digital fingerprint that represents the file's contents. The server then sends the software update file and the corresponding hash value to the client. The hash value is made public to all in a trustable place such as the software company's web site.

On the client-side, the received software update file is recalculated to generate a new hash value. This recalculated hash value is then compared with the received hash value from the server. If the comparison matches, it ensures that the software update file was not tampered with or altered during transmission. However, if the comparison does not match, it indicates that the file was modified or corrupted during transmission, and the client can alert the user or take appropriate action.

![Hash for data integrity](./images/hash_integrity.jpg)

[Source: Tutorial Point](https://www.tutorialspoint.com/cryptography/cryptography_hash_functions.htm)

For example, the download page of the popular open source [Apache Web server](https://httpd.apache.org/download.cgi) lists hash codes for different hashing algorithms.

## 3 Asymmetric Encryption

In the realm of cryptography, asymmetric encryption has emerged as a game-changer, offering unparalleled security and flexibility in secure communication. Unlike its symmetric counterpart, which relies on a shared secret key, asymmetric encryption employs a pair of keys: one public and one private. This innovative approach has transformed the way we protect sensitive information, enabling secure communication over public channels. Asymmetric encryption offers several advantages over symmetric encryption. Firstly, it eliminates the need for a shared secret key, making it ideal for scenarios where secure key exchange is challenging. Secondly, it enables digital signatures, allowing individuals to authenticate the source and integrity of messages. Finally, it facilitates key exchange and secure communication over public channels, such as the internet.

One of the most popular asymmetric encryption algorithms is RSA, widely used for secure web browsing, email encryption, and digital signatures. Other notable algorithms include Elliptic Curve Cryptography (ECC) and PGP (Pretty Good Privacy). Secure Web Browsing (HTTPS) is based on ECC to provide encryption and authentication for Web.

### 3.1 Key Concepts

The fundamental principle of asymmetric encryption is based on the concept of key pairs. A user first generate a pair of keys that consists of a public key and a private key from a large random number.

![Key Generation](./images/public_key_gen.png)

[Source: Wikipedia](https://en.wikipedia.org/wiki/Public-key_cryptography)

#### 3.1.1 Public Key

A public key is a cryptographic key that is freely accessible to anyone. It is used for encryption, allowing anyone to send secure messages to the owner of the corresponding private key. Public keys are typically shared openly and are used to encrypt data, verify digital signatures, and establish secure connections. Characteristics of Public Keys:

- Publicly available
- Used for encryption
- Not sensitive, shared openly

#### 3.1.2 Private Key

A private key, on the other hand, is a cryptographic key that is kept confidential and secure. It is used for decryption, allowing the owner to access encrypted messages and data. Private keys are sensitive and must be protected from unauthorized access to prevent compromise. Characteristics of Private Keys:

- Kept confidential: it is computationally impossible to find out the private key from its public key
- Used for decryption, digital signature, and key exchange
- Sensitive, not shared publicly

#### 3.1.3 Public Key Encryption

In a public-key encryption system, anyone can use the public key to lock (encrypt) a message, but only the person with the matching private key can unlock (decrypt) it to read the original message.

![Public Key Encryption](./images/public_key_encryption.png)

[Source: Wikipedia](https://en.wikipedia.org/wiki/Public-key_cryptography)

### 3.2 Authentication

A common application of asymmetric encryption is user authentication. Following is a simplified authentication process:

1. Generate Key Pair: Create a linked public and private key pair for the user.
2. Bind Identity: Associate the public key with the user’s identity (e.g., username, email) and store this information in the service provider’s database.
3. Send Challenge: When the user requests access, the server sends a random challenge (nonce) to the user.
4. Sign and Verify: The user signs the challenge with their private key and sends the signature to the server. The server verifies the signature with the public key. If valid, the user is authenticated and granted access.

### 3.2 Key Exchange

Public key and private key can be used in a key exchange protocol to create a shared key for symmetric encryption. The Diffie-Hellman (DH) key exchange protocol is a secure way for two parties (let's call them Alice and Bob) to share a secret key without actually sharing the key itself. This protocol is important for modern cryptography because it allows Alice and Bob to communicate securely over public channels.Here's how it works:

- Alice and Bob agree on some mathematical parameters (like algorithm version and key length etc).
- They use these parameters to generate two keys: a public key and a private key. They keep their private keys secret, but share - their public keys openly.
- Alice and Bob exchange their public keys over a reliable channel (like a trusted messenger or a secure Web site).
- They use each other's public keys and their own private keys to calculate a shared secret key. This shared key is never sent in plain text, so it remains secure.

![Key Exchange](./images/key_exchange.png)

[Source: Wikipedia](https://en.wikipedia.org/wiki/Public-key_cryptography)

The beauty of the DH key exchange protocol lies in its ability to establish a secure shared secret key without actually exchanging the key itself. This eliminates the risk of the key being intercepted or compromised during transmission. A key exchange protocol like Diffie-Hellman or RSA is used to create a session key. A session key is a temporary, symmetric encryption key used for secure communication between two parties during a single session or transaction. Session keys provide improved security by limiting the exposure of the long-term secret key. This is essential because long-term secret keys are highly sensitive and need to be protected from unauthorized access. If a long-term secret key is compromised, it can lead to a complete breakdown of the security system. Session keys, on the other hand, are temporary and are used for a single session or transaction. This means that even if a session key is compromised, the damage is limited to that specific session, and the long-term secret key remains secure. Session keys also facilitate efficient key management. In any secure communication system, key management is a critical component. Managing long-term secret keys can be complex and cumbersome, especially in large-scale systems. Session keys simplify key management by minimizing the number of long-term secret keys that need to be stored and managed.

Key exchange protocols are widely used in almost everywhere in today's digital communication:

- Secure Internet Communication: Diffie-Hellman is a fundamental component in TLS and SSL protocols, enabling secure connections between web browsers and servers.
- Wi-Fi Security: The Diffie-Hellman key exchange enables secure connections between devices and access points in Wi-Fi networks.
- Remote Access Protocols: Remote desktop protocols often use Diffie-Hellman to establish encrypted communication channels between remote users and servers.
- Virtual Private Networks (VPNs): VPNs commonly use Diffie-Hellman to establish secure communication channels over the Internet.
- Secure Messaging: Many messaging applications, including Signal and WhatsApp, use Diffie-Hellman to protect the privacy of conversations.
- Email Protection: Several email security protocols (e.g., Pretty Good Privacy (PGP) or its open standard OpenPGP) use Diffie-Hellman to ensure safe key exchanges.
- Voice over Internet Protocol (VoIP): VoIP services use Diffie-Hellman to establish secure communication channels for voice and video calls.
- Secure File Transfers: SSH (Secure Shell) and SFTP (Secure File Transfer Protocol) use Diffie-Hellman for secure key exchanges when establishing a secure channel for data transfers.

### 3.3 Digital Signature

The use of private keys and public keys in digital signatures is a fundamental aspect of asymmetric cryptography. This technology enables secure communication over the internet by providing authentication, integrity, and non-repudiation.

Private keys play a crucial role in generating digital signatures. When a sender, Alice, wants to send a secure message to Bob, she uses her private key to encrypt the hash of the message. This creates a digital signature that is unique to the message and Alice's private key. The digital signature is then sent along with the original message. On the receiving end, Bob uses Alice's public key to decrypt the digital signature. Bob also hashes the received message using the same algorithm as Alice. He then compares the decrypted digital signature with the newly generated hash. If the two values match, Bob can be certain that the message came from Alice and was not tampered with during transmission.

![Digital Signature](./images/digital_signature.png)

[Source: Wikipedia](https://en.wikipedia.org/wiki/Public-key_cryptography)

The PGP protocol is a prime example of how private keys and public keys facilitate digital signatures. PGP uses a combination of symmetric and asymmetric cryptography to ensure secure communication. The digital signature is generated using the sender's private key and is verified using the sender's public key. This ensures that the message is authentic and has not been tampered with.
In addition to authentication and integrity, digital signatures also provide non-repudiation. This means that the sender cannot deny having sent the message, as the digital signature serves as proof of their involvement. This is particularly important in legal and financial transactions, where authenticity and accountability are crucial.

### 3.4 Bitcoin User ID and Digital Signature

Bitcoin, the pioneering cryptocurrency, has revolutionized the way we think about money and financial transactions. One of the fundamental components of Bitcoin's decentralized and secure nature is its use of public key cryptography to identify users.

The process of identifying users in Bitcoin begins with the generation of a key pair, consisting of a private key and a public key. The private key is kept secret, while the public key is shared with others. The public key serves as a unique identifier, allowing users to receive bitcoins and participate in the Bitcoin network. From the public key, a bitcoin address is generated through a series of mathematical operations, providing a shorter and more convenient version of the public key. The bitcoin address, starting with `1` or `3`, is a string of letters and numbers (For example, `1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa`) that is used to receive bitcoins. When a user wants to receive bitcoins, they share their bitcoin address with the sender, who uses this address to send bitcoins. The bitcoin network then verifies that the sender has the private key corresponding to the public key used to receive the bitcoins, ensuring that the transaction is secure and legitimate.

![Digital Signature](./images/bitcoin.png)

[Source: Wikipedia](https://en.wikipedia.org/wiki/Bitcoin)

The use of digital signatures in Bitcoin is a crucial component of the cryptocurrency's decentralized and secure nature. When a user initiates a transaction in Bitcoin, they create a message that includes the sender's and recipient's public addresses, the amount of bitcoins to be transferred, and other relevant information. This message is then hashed using a cryptographic hash function, such as SHA-256, to create a fixed-length digest. The user's private key is then used to sign the hashed message, generating a digital signature. This digital signature is unique to the transaction and the user's private key, ensuring that the transaction is authentic and cannot be tampered with. The digital signature is then broadcast to the Bitcoin network, where it is verified by nodes using the user's public key. If the digital signature is valid, the transaction is considered authentic and is combined with other verified transactions in a block. The block is then added to the blockchain, a decentralized and public ledger that records all Bitcoin transactions.

### 3.4 PKI

Public Key Infrastructure (PKI) is a crucial component of modern cryptography, enabling secure communication, authentication, and digital signatures over the internet. It builds the secure infrastructure for Web based on public-key cryptography. The concept of PKI dates back to the 1970s, when cryptographers introduced the idea of public-key cryptography. This revolutionary concept enabled secure communication over public channels, using a pair of keys: a public key for encryption and a private key for decryption. Over the years, PKI evolved to address the growing need for secure online transactions, authentication, and digital signatures.

The first PKI systems emerged in the 1980s, with the development of X.509, a standard for digital certificates. The structure of X.509 digital certificates includes the subject's identity, public key, and algorithm, as well as the issuer's identity and digital signature. A Certificate Authority (CA) plays a crucial role in the issuance of digital certificates, which are essential for secure online transactions and communication.

One of the critical steps in this process is the validation of a Certificate Signing Request (CSR). The process has the following steps:

- Step 1: Receipt of Certificate Signing Request (CSR). The Certificate Authority (CA) receives the CSR from the applicant through a web interface or email.
- Step 2: Validation of CSR. The CA validates the CSR to ensure it meets the required format and contains all necessary information, such as: Applicant's public key, Name, Email address. This step prevents errors and ensures the CSR is complete.
- Step 3: Verification of Applicant's Identity. The CA verifies the applicant's identity through documentation, such as: Business registration, Articles of incorporation, and/or Government-issued ID. This step establishes the authenticity of the applicant and ensures the digital certificate is issued to a legitimate entity.
- Step 4: Verification of Domain Ownership (for SSL/TLS certificates): The CA verifies the applicant's ownership of the domain name through: DNS records, Email verification, or other means. This step ensures the digital certificate is issued to the rightful owner of the domain, preventing potential security breaches.
- Step 5: Issuance of Digital Certificate. If validation and verification steps are successful, the CA issues a digital certificate containing: Applicant's public key and Identity information (use id, email address, domain name).
- Step 6: Signing of Digital Certificate. The CA signs the certificate using its private key, creating a digital signature that verifies the certificate's authenticity.
- Step 7: Delivery of Signed Certificate. The CA sends the signed certificate to the applicant, who can then install it on their server or device.

![Certificate](./images/certificate.webp)

[Source: Automate the Local Certificate Authority Registration with Python](https://python.plainenglish.io/automate-the-local-certificate-authority-registration-with-python-ced8771b2742)

PKI operates on a hierarchical trust model, with a Root CA at the top, issuing certificates to intermediate CAs, which in turn issue certificates to organizations, individuals, or devices. This hierarchy ensures that each certificate is traceable back to a trusted Root CA. How could one get the public key of a Root CA (there are multiple Root CAs)? Pre-installed trust stores in operating systems and browsers provide a convenient starting point. These trust stores come with a collection of trusted Root CA public keys, regularly updated to include the latest additions. This approach ensures that most users have access to trusted Root CA public keys without needing to take additional steps. Alternatively, users can visit the CA's website to download the Root CA public key. Most CAs provide their Root CA public keys in the form of a certificate or PEM file, making it easily accessible. This approach requires some technical knowledge but provides a direct path to obtaining the necessary public key. Public key repositories, such as the Mozilla Public Key Repository or the Apple Root Certificate Program, offer a centralized collection of trusted Root CA public keys. These repositories provide a convenient way to access a wide range of Root CA public keys, making it easier to establish trust in digital certificates.

PKI serves several purposes, including:

- Secure Communication: PKI enables secure communication over public channels, ensuring confidentiality, integrity, and authenticity of data. For example, online banking and e-commerce transactions rely on PKI for secure communication. When you access your online bank account, PKI ensures that your login credentials and financial data remain confidential and tamper-proof.
- Authentication: PKI verifies the identity of individuals, organizations, and devices, ensuring trust and credibility in online transactions. For instance, digital certificates issued by a trusted CA authenticate the identity of a website. When you visit a website with a digital certificate, your browser verifies the certificate, ensuring that you are communicating with the genuine website and not an imposter.
- Digital Signatures: PKI enables digital signatures, allowing individuals to sign documents and messages electronically, ensuring non-repudiation and authenticity. Digital signatures are used in legal documents, contracts, and digital agreements. For example, when signing a digital contract, your digital signature ensures that you cannot deny having signed the document.
- Encryption: PKI facilitates encryption, protecting sensitive data from unauthorized access. Encryption ensures that even if data is intercepted, it cannot be read or accessed without the decryption key. For instance, when you send sensitive data over the internet, PKI enables encryption, ensuring that only the intended recipient can access the data.
