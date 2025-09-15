// In a real application, this data would be fetched from a CMS or database.
export const getEventsInfo = async (): Promise<string> => {
	// Simulates an API call
	await new Promise((resolve) => setTimeout(resolve, 100));
	return `
**2025 Events:**
* **July 2025:**
  - Board Meeting (Jul 16, 6:30 PM, Amado Collective, by Ali, Complete)
  - Real Talks: F*Ups That Fueled Us (Jul 30, 7:00 PM, Elanos Miramar, by Gaurav)
  - Learning Workshop: AI for Business Growth (Jul 10, 2025) - A full-day workshop on leveraging AI for business innovation

* **August 2025:**
  - Learning session with Amit Jain (Aug 22, by Sourabh)
  - SLP Social – Scent of a Woman (Aug 14, Suctancar residence, by Shibani)
  - Family Retreat: Fun in the Sun (Aug 20-22, 2025) - A family-friendly event with activities for all ages

* **September 2025:**
  - 'Leadership from 26,000 feet' workshop with Captain Raghu Raman (Sep 19, by Sourabh)

* **November 2025:**
  - Learning workshop (Date TBD, by Sourabh)

* **December 2025:**
  - AI Productivity workshop with Varun Chawla (Dec 13 or 22, by Sourabh)

**2026 Events:**
* **January 2026:**
  - Vision Board Exercise (SLP Event, by Shibani)
  - Bio Mimicry Workshop with Anjan Prakash (Jan 31, by Sourabh)
  - RIE Pune (Jan 8-11, Regional Event, by Ali)

* **February 2026:**
  - Family Picnic (Feb 8, by Gaurav & Shibani)
  - Learning talk with Anil Lamba (Feb 20, by Sourabh)

* **March 2026:**
  - Holi Socials (Mar 4, by Gaurav)
  - Crisis Management Presentation with DG Rakesh Maria (Mar 20, by Sourabh)
  - Talk on Coping with Menopause (SLP Event, by Shibani)
  - Pickleball Tournament Champion celebration for Gaurav Sapra (MyEO, by Asheen)

* **April 2026:**
  - Musical Workshop with Goa Jazz Academy (Apr 18, by Sourabh)
  - **Chapter Retreat to MALTA** (Apr 23-27, by Vidur) - An exclusive experience of luxury, learning, and connection in a stunning Mediterranean setting

* **May 2026:**
  - **Surprise WOW Event** (May 16) - A secret, high-energy event. Details are a secret!

* **June 2026:**
  - President's Gala (Date TBD, by Ali)

**Learning Workshops 2025-2026:**
* AI for Business Growth (July 2025)
* Leadership from 26,000 feet with Captain Raghu Raman (September 2025)
* AI Productivity with Varun Chawla (December 2025)
* Bio Mimicry with Anjan Prakash (January 2026)
* Crisis Management with DG Rakesh Maria (March 2026)
* Musical Workshop with Goa Jazz Academy (April 2026)

**Special Activities:**
* **SLP Events:** Vision Board Exercise, Scent of a Woman Social, Talk on Coping with Menopause, Learning with Kids Nature Walk, Drum Circle
* **MyEO Activities:** Pickleball Tournament, Book Club, Stars Soirée, Poker Tournament
* **Family Events:** Family Picnic, Holi Socials, Christmas with Kids, Family Retreat
  `.trim();
};

export const getBirthdaysAndAnniversariesInfo = async (): Promise<string> => {
	await new Promise((resolve) => setTimeout(resolve, 100));
	return `
**January:**
* **Birthdays:** Tony Dewan (1st), Varun Jalan (29th), Kavita Coulagi (27th), Taruna (Haresh Abichandani's spouse, 31st), Dayani (Sourabh Chattopadhyay's child, 3rd), Samrat (Nath Laud's child, 11th), Gauri (Sandeep Agarwal's child, 11th), Dhruv (Priya Coulagi Bakshi's child, 14th), Aryaveer (Anirudh Agrawal's child, 20th), Avyaan (Venkat Muppana's child, 10th)
* **Anniversaries:** Oscar & Elaine De Lima Pereira (13th), Ridhima & Angad Singh (27th), Vartan & Vivin Mathias (28th), Gopal & Padmaraje Patwardhan (28th)

**February:**
* **Birthdays:** Priya Coulagi Bakshi (16th), Parthiv (Tony Dewan's child, 17th), Annika (Kavita Coulagi's child, 20th)
* **Anniversaries:** Gaurang & Shibani Suctancar (1st), Amit & Rasika Palekar (25th), Haresh & Taruna Abichandani (27th), Dhruv & Stuti Rajani (15th), Vikram & Shweta Puri (16th)

**March:**
* **Birthdays:** Varun Chawla (3rd), Venkat Muppana (17th), Anirudh Agrawal (15th), Nath Laud (25th), Gopal Patwardhan (31st), Haresh Abichandani (17th), Samvedita (Varun Chawla's spouse, 25th), Azlaan (Ali Haji's child, 20th)
* **Anniversaries:** None listed for March

**April:**
* **Birthdays:** Asheen Laljee (11th), Attreya Sawantt (24th), Sandeep Agarwal (27th), Mayura (Mangish Kakodkar's spouse, 11th), Vikram (Kavita Coulagi's spouse, 19th), Srimoyi (Sourabh Chattopadhyay's spouse, 24th), Lakshaya (Gaurav Sapra's child, 11th), Sara (Gaurang Suctancar's child, 10th), Liam (Nitin Bhatia's child, 10th), Atharv (Dhruv Rajani's child, 6th)
* **Anniversaries:** Varun & Samvedita Chawla (3rd), Gaurav & Divya Sapra (26th)

**May:**
* **Birthdays:** Amit Palekar (10th), Ridhima Singh (31st), Mangish Kakodkar (2nd), Nitin Bhatia (23rd), Richa (Ali Haji's spouse, 13th), Prerna (Rahul Khetrapal's spouse, 13th), Stuti (Dhruv Rajani's spouse, 6th), Aaryan (Venkat Muppana's child, 30th), Roohaan (Ridhima Singh's child, 30th), Keya (Mangish Kakodkar's child, 24th), Siya (Varun Chawla's child, 27th), Devashree (Attreya Sawantt's child, 22nd), Tarini (Priya Coulagi Bakshi's child, 12th)
* **Anniversaries:** Attreya & Tanvi Sawantt (21st), Nath & Kalyani Laud (11th), Sandeep & Shruti Agarwal (8th), Rahul & Priya Agarwal (18th)

**June:**
* **Birthdays:** Gaurang Suctancar (4th), Rahul Khetrapal (14th), Tanvi (Attreya Sawantt's spouse, 17th), Vivin (Vartan Mathias's spouse, 12th), Kalyani (Nath Laud's spouse, 2nd), Geet (Aakash Khaunte's child, 8th), Alexa (Oscar De Lima Pereira's child, 8th), Viara (Vartan Mathias's child, 11th), Shivani (Sandeep Verenkar's child, 21st), Seher (Varun Chawla's child, 4th)
* **Anniversaries:** None listed for June

**July:**
* **Birthdays:** Aakash Khaunte (6th), Dhruv Rajani (10th), Aparna (Aakash Khaunte's spouse, 14th), Shibani (Gaurang Suctancar's spouse, 26th), Imara (Ali Haji's child, 29th), Kian (Nitin Bhatia's child, 15th), Naimah (Neha Bhasin's child, 3rd)
* **Anniversaries:** Arpit & Arushi Agarwal (6th)

**August:**
* **Birthdays:** Siddharth Goel (12th), Rahul Agarwal (13th), Sunaina Gera (16th), Karen Bhatia (28th), Priya (Rahul Agarwal's spouse, 25th), Shweta (Vikram Puri's spouse, 27th), Ansh (Aakash Khaunte's child, 10th), Rishabh (Gaurang Suctancar's child, 28th), Rehaan (Asheen Laljee's child, 25th), Kiara (Nitin Bhatia's child, 25th), Mohit (Haresh Abichandani's child, 27th), Aarna (Amit Palekar's child, 5th)
* **Anniversaries:** Venkat & Sneha Muppana (9th), Priya & Gaurav Bakshi (1st), Mangish & Mayura Kakodkar (1st)

**September:**
* **Birthdays:** Rasika (Amit Palekar's spouse, 27th), Arushi (Arpit Agarwal's spouse, 30th), Gaurav (Priya Coulagi Bakshi's spouse, 30th), Arohee (Attreya Sawantt's child, 7th), Shiv (Siddharth Goel's child, 3rd), Priyanshi (Gaurav Sapra's child, 3rd), Reanna (Rahul Khetrapal's child, 17th), Lyla (Kavita Coulagi's child, 12th)
* **Anniversaries:** Neha Bhasin & Harshvardhan Sharma (20th)

**October:**
* **Birthdays:** Vartan Mathias (1st), Gaurav Sapra (1st), Ashwin Khalap (25th), Rijul Bharat (23rd), Richa (Anirudh Agrawal's spouse, 28th), Sneha (Venkat Muppana's spouse, 4th), Padmaraje (Gopal Patwardhan's spouse, 27th), Vion (Vartan Mathias's child, 9th)
* **Anniversaries:** None listed for October

**November:**
* **Birthdays:** Ali Haji (24th), Anuj Kurade (20th), Neha Bhasin (14th), Harshvardhan (Neha Bhasin's spouse, 26th), Mahira (Rahul Khetrapal's child, 18th), Aneesh (Sandeep Verenkar's child, 28th)
* **Anniversaries:** Aakash & Aparna Khaunte (20th), Ali & Richa Haji (11th), Anirudh & Richa Agrawal (25th)

**December:**
* **Birthdays:** Arpit Agarwal (8th), Sandeep Verenkar (6th), Vikram Puri (12th), Radha (Siddharth Goel's spouse, 8th), Divya (Gaurav Sapra's spouse, 22nd), Shruti (Sandeep Agarwal's spouse, 10th), Nandini (Neha Bhasin's child, 24th), Khushi (Haresh Abichandani's child, 13th), Rohan (Rahul Agarwal's child, 15th), Mansi (Tony Dewan's child, 9th)
* **Anniversaries:** Atul & Gaurapriya Pai Kane (27th), Sandeep & Sonali Verenkar (23rd), Nitin & Karen Bhatia (21st)

**Member Children's Birthdays Summary:**
* **January:** Dayani (3rd), Avyaan (10th), Samrat (11th), Gauri (11th), Dhruv (14th), Aryaveer (20th)
* **February:** Parthiv (17th), Annika (20th)
* **March:** Azlaan (20th)
* **April:** Atharv (6th), Sara (10th), Liam (10th), Lakshaya (11th)
* **May:** Tarini (12th), Devashree (22nd), Keya (24th), Siya (27th), Aaryan (30th), Roohaan (30th)
* **June:** Seher (4th), Geet (8th), Alexa (8th), Viara (11th), Shivani (21st)
* **July:** Naimah (3rd), Kian (15th), Imara (29th)
* **August:** Aarna (5th), Ansh (10th), Rehaan (25th), Kiara (25th), Mohit (27th), Rishabh (28th)
* **September:** Shiv (3rd), Priyanshi (3rd), Arohee (7th), Lyla (12th), Reanna (17th)
* **October:** Vion (9th)
* **November:** Mahira (18th), Aneesh (28th)
* **December:** Mansi (9th), Khushi (13th), Rohan (15th), Nandini (24th)
  `.trim();
};

export const getPhotoLinks = async (): Promise<string> => {
	await new Promise((resolve) => setTimeout(resolve, 100));
	return `
* **Pickleball Social and Potluck Photos/Videos:** [https://drive.google.com/drive/folders/10XJbBH-cJmVzvxFMAOu3WTaHbpr_0dxe](https://drive.google.com/drive/folders/10XJbBH-cJmVzvxFMAOu3WTaHbpr_0dxe)
* **Gala 2025 Photos/Videos:** [https://drive.google.com/drive/folders/1L4GKLd9KN-tyW60yFWPJk1xdEzLtF3Rn](https://drive.google.com/drive/folders/1L4GKLd9KN-tyW60yFWPJk1xdEzLtF3Rn)
* **Malta Retreat 2024:** [https://photos.app.goo.gl/malta-retreat-2024](https://photos.app.goo.gl/malta-retreat-2024)
* **EO Goa Learning Sessions:** [https://photos.app.goo.gl/learning-sessions](https://photos.app.goo.gl/learning-sessions)
* **Family Events Collection:** [https://photos.app.goo.gl/family-events](https://photos.app.goo.gl/family-events)
  `.trim();
};