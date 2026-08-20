---
title: Chapter 9 Security
---

## 1 Introduction

[How security is your password](https://www.passwordmonster.com/)? How many do you have and how do you manage them?

Information security is a critical aspect of today's digital age, as it encompasses the protection of sensitive data and systems from unauthorized access, use, disclosure, disruption, modification, or destruction. The concept of information security is multifaceted and comprises several key elements, including privacy, authentication, authorization, integrity, non-repudiation, and availability.

- Privacy is the right of individuals to control their personal information and to ensure that it is not disclosed to unauthorized parties. In the digital realm, privacy is crucial, as personal data is often collected, stored, and transmitted online. Information security measures, such as encryption and access controls, help to protect individual privacy and prevent data breaches.
- Authentication is the process of verifying the identity of users, devices, or systems. This is achieved through various methods, including passwords, biometrics, and tokens. Authentication ensures that only authorized entities have access to sensitive information and systems.
- Authorization is the process of determining what actions a user or system can perform once they have been authenticated. This includes access controls, such as role-based access control and mandatory access control, which ensure that users only have access to the resources and data they need to perform their tasks.
- Integrity refers to the protection of data from unauthorized modification, deletion, or alteration. This is achieved through measures such as digital signatures and checksums. Ensuring the integrity of data is critical, as any changes or alterations can compromise its accuracy and reliability.
- Non-repudiation is the assurance that a sender of a message cannot deny having sent the message. This is achieved through digital signatures and certificates, which provide a tamper-evident record of transactions and communications.
- Availability refers to the accessibility and usability of information and systems. This includes ensuring that systems are operational and accessible when needed, and that data is retrievable and usable.
- Audit is a formal process of evaluating an organization’s information systems to ensure compliance with security policies and identify potential vulnerabilities. The audit process typically includes planning, gathering system and user activity data (all user activities are logged), identifying vulnerabilities through scanning or testing, and generating a report with findings and recommended improvements.
- Digital forensics is the practice of collecting, preserving, and analyzing digital evidence to investigate and understand security incidents or cybercrimes. Implementation of forensics involves several stages: data acquisition (creating an exact copy of the affected systems), integrity preservation (ensuring evidence is not altered), in-depth analysis (examining files, logs, and metadata), and reporting (documenting the findings for legal or organizational action).

Below is an example of Alice sending a confidential message to Bob. It illustrate the concepts of information security:

- Privacy: Alice wants to ensure that only Bob can read the message, and no one else can access it. She uses encryption to protect the message, so even if an unauthorized party intercepts it, they won't be able to understand its contents.
- Authentication: Before sending the message, Alice verifies Bob's identity through a digital certificate or password to ensure she's sending it to the right person.
- Authorization: Alice checks Bob's access level and ensures he has the necessary clearance to receive the message.
- Integrity: Alice uses a digital signature or checksum to ensure the message isn't tampered with or altered during transmission. When Bob receives the message, he can verify its integrity using the same digital signature or checksum.
- Non-repudiation: Alice uses a digital signature that includes a timestamp and her unique identity, so Bob can verify the message came from her and when it was sent. This prevents Alice from denying she sent the message.
- Availability: Alice ensures the message is stored on a reliable server and transmitted through a secure channel, so Bob can access it when needed.
- Audit: Alice wants to ensure that systems are protected against unauthorized access, data breaches, and other cyber threats. Both security policies and system/user activity data (logs) are used in the audit process.
- Forensics: When an attack happens, Alice wants to find out how an attack occurred, what were affected, and who is responsible. System/user activity data (logs) are important in digital forensics.

To fully understand and effectively utilize security tools like encryption and digital certificates, it's essential to have a basic understanding of cryptography. Cryptography is the practice of protecting the confidentiality, integrity, and authenticity of information by using mathematical algorithms to transform it into an unreadable format, called ciphertext. This ancient art has evolved significantly over the centuries, and today, it plays a vital role in securing online transactions, communication networks, and digital data.

## 2 Malware

Malware is a general term used to describe any type of malicious software that is designed to harm or exploit a computer system or its data. Malware can take many forms, including viruses, worms, trojans, spyware, adware, ransomware, and botnets.

- Virus: A self-replicating program that attaches itself to a file or program on a computer. Viruses can cause damage to a computer's operating system, files, and data. Example: The "I Love You" virus, which spread through email attachments and infected millions of computers in 2000.
- Worm: A self-replicating program that can travel from computer to computer without needing to be sent as an attachment. Worms can consume bandwidth and overload computer systems. The Morris worm, also known as the Internet worm of November 2, 1988, was one of the first computer worms to gain significant mainstream media attention. The worm exploited several vulnerabilities of targeted systems, including weak passwords, and was initially programmed to check each computer to determine if the infection was already present.
- Trojan: A program that appears to be legitimate but actually contains malicious code. Trojans can allow hackers to access a computer system remotely. Example: The "Zeus" Trojan, which was used to steal banking credentials and was found on over 1 million computers in 2010.
- Spyware: A program that secretly monitors and collects personal information about a user, such as browsing history and credit card details. Example: The "Aurora" spyware, which was used to track user activity and was found on millions of computers in 2011.
- Adware: A program that displays unwanted advertisements on a computer, often in the form of pop-ups or banners. Example: The "Bonzi Buddy" adware, which displayed pop-up ads and was installed on millions of computers in the early 2000s
- Ransomware: A program that encrypts a user's files and demands payment in exchange for the decryption key. Example: The "WannaCry" ransomware, which infected over 200,000 computers in 2017 and demanded a ransom in bitcoin.
- Botnet: A network of computers that have been infected with malware and can be controlled remotely by a hacker to conduct malicious activities. Example: The "Mirai" botnet, which was used to conduct massive DDoS attacks in 2016 and was made up of over 600,000 infected devices.
- Rootkit: A program that hides malware from the operating system and security software, allowing it to remain undetected. Example: The "Sony Rootkit", which was included on music CDs in 2005 and installed a rootkit on users' computers without their knowledge.
- Logic Bomb: A piece of code that is designed to cause havoc only when a specific set of circumstances occur. Example: The "Stuxnet" logic bomb, which was designed to destroy Iranian nuclear centrifuges and was discovered in 2010.
- Backdoor: A secret entry point in a computer system that allows hackers to access the system without being detected. Example: The "Shadow Brokers" backdoor, which was discovered in 2016 and allowed hackers to access NSA hacking tools.
- Keylogger: A program that records every keystroke made on a computer, often used to steal sensitive information like passwords. Example: The "Ghost RAT" keylogger, which was used to steal sensitive information and was found on millions of computers in 2011.

### 2.1 How Can Malware Break Into Your System?

Don't be scared by the many types of malware because they are just different harms they can do after breaking into your system. The best protection is understanding the ways malware can break into you system and block those ways. Malware can break into a system through four primary entry points:

- Vulnerable System: Security bugs vulnerabilities in software or operating systems, or outdate systems allowing malware to gain access.
- Download and Install Infected Software: Downloading software from untrusted sources, which may bundle malware.
- Social Engineering (Phishing): Tricking users into revealing login credentials or installing malware through emails, messages, or social media.
- Weak Passwords: Using easily guessable passwords, allowing hackers to gain access.

### 2.2 Antivirus Software ?

Many books and people tell you that antivirus software is an essential tool in protecting your digital security because it prevent malware from infecting your system. However, the author of this book would argue that it is wrong: it cannot prevent malware from infecting your system because it cannot detect any **NEW** malware (virus or worms). For example, if Microsoft Apple, or Google system has a security bug that is exploited by a worm, how could antivirus software know it? If a user want to install a new virus that only still your email address, how could antivirus software prevent it?

And it comes with the cost of anti virus software to provide real time protection. Two big costs are subscription fee and resource utilization. The antivirus software can consume system resources (CPU, memory, etc.), potentially slowing down your computer by 20%, more or less. If you can following the following best practices, your system is safe.

### 2.3 Protection

To prevent malware infections and keep your system safe, it's essential to:

- Keep your system and software up-to-date - simply turn on auto system updates.
- Don't download software from untrusted sources. Be cautious with emails and messages, and avoid suspicious links or attachments.
- Use strong, unique passwords and enable two-factor authentication.
- Don't leak your password to untrusted ones.
- Have multiple data copies.

## 3 DOS and DDOS

The terms DOS (Denial of Service) and DDOS (Distributed Denial of Service) refer to types of cyberattacks that aim to make computer resources or networks unavailable by flooding them with traffic or exploiting vulnerabilities. A DOS attack is a type of cyberattack where an attacker attempts to make a computer or network resource unavailable by flooding it with traffic or exploiting a vulnerability. This is typically done by sending a large amount of data or requests to the targeted system, overwhelming its resources and causing it to slow down or crash. For example, a website may be flooded with a large number of requests from a single source, causing the server to become overwhelmed and unavailable to legitimate users. Similarly, an attacker may exploit a vulnerability in a network device, causing it to malfunction and deny service to users.

On the other hand, a DDOS attack is a type of DOS attack where the traffic or requests come from multiple sources, often compromised devices or bots. This makes it difficult to block the attack by simply blocking a single source IP address. For instance, a group of compromised devices (bots) may be used to flood a website with traffic, causing it to become unavailable. Similarly, a DDOS attack may be launched against a gaming server, causing it to slow down and become unresponsive to players.
The key difference between DOS and DDOS attacks is the source of the traffic or requests. DOS attacks come from a single source, while DDOS attacks come from multiple sources. This makes DDOS attacks more difficult to mitigate, as it is harder to block traffic from multiple sources. Additionally, DDOS attacks are often more sophisticated and may use multiple vectors to attack the targeted system. Real-world examples of DDOS attacks include the 2016 attack on a DNS provider, which caused widespread outages and slow loading times for popular websites. Another example is the 2018 attack on GitHub, which peaked at 1.35 Tera bps and was one of the largest DDOS attacks on record.

Preventing Distributed Denial of Service (DDOS) attacks requires a comprehensive approach to ensure the security and availability of networks and systems. Three essential measures to prevent DDOS attacks are network infrastructure, Content Delivery Networks (CDNs), and network monitoring and auditing. Firstly, network infrastructure plays a critical role in preventing DDOS attacks. Firewalls and Intrusion Prevention Systems (IPS) are essential components of network infrastructure that help detect and block malicious traffic. Firewalls act as a barrier between the internet and the internal network, controlling incoming and outgoing traffic based on predetermined security rules. IPS, on the other hand, inspect traffic and identify potential threats, blocking them before they can cause harm. By implementing firewalls and IPS, organizations can significantly reduce the risk of a successful DDOS attack. Secondly, CDNs are a vital measure to prevent DDOS attacks. CDNs distribute traffic across multiple servers, reducing the load on individual servers and making it more difficult for attackers to overwhelm the network. CDNs also help filter out malicious traffic and provide real-time monitoring and analysis to quickly identify and respond to potential threats. By using CDNs, organizations can ensure that their websites and applications remain available and secure, even in the face of a DDOS attack. Lastly, network monitoring and auditing are crucial measures to prevent DDOS attacks. Network monitoring involves real-time monitoring of network traffic to detect potential threats and anomalies. Auditing involves regular security assessments to identify vulnerabilities and address them before they can be exploited. By monitoring network traffic and conducting regular security audits, organizations can quickly identify and respond to potential threats, minimizing the risk of a successful DDOS attack.

## 4 Security Policies

Can you play video games on a company computer? Is your email on a company computer private? The answer is, it depends. Company policies and acceptable use agreements vary, and some may permit personal use,

Computer security policies are essential for any organization that uses computer systems and networks. These policies outline the rules and guidelines for employees to follow to ensure the security and integrity of the organization's computer systems and data. As an employee, it is important to understand and adhere to these policies to prevent unauthorized access, data breaches, and other security threats. First and foremost, employees should familiarize themselves with the organization's computer security policies and procedures. This includes understanding the acceptable use policy, password policy, and incident response plan. Employees should also be aware of the consequences of violating these policies, which can include disciplinary action, termination, or even legal action.

In today's digital age, companies have a vested interest in ensuring the security and integrity of their computer systems and networks. As such, it is not uncommon for companies to monitor and inspect employee computers and email accounts. This practice is often met with controversy, as some employees may feel that it infringes upon their privacy. However, companies have a legitimate interest in protecting their assets and ensuring that employees are not engaging in misconduct or illegal activities.
