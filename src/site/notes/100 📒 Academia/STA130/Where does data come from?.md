---
{"dg-publish":true,"dg-path":"academia/STA130/Where does data come from?.md","permalink":"/academia/sta-130/where-does-data-come-from/","created":"2024-01-22T13:18:48.366-05:00","updated":"2024-01-22T14:28:20.636-05:00"}
---

**Preamble**
Week: [[100 📒 Academia/STA130/_STA130 Notes\|3]]
Course: #STA130
Date: 2024-01-22

---

# Possible sources of data

- Medical treatments or procedures
	- Humans
	- Animals
- Experiments (e.g. looking at plant growth)
- Surveys
- Government agencies
- Publicly available datasets (Kaggle, data.gov, etc.)
- Private companies
- Web APIs & web scraping

# Human Experiments and Ethical Codes

## Nuremberg code

- Formulated in August 1947 in Nuremberg, Germany
	- by American judges sitting in judgement of Nazi doctors accused of conducting murderous and torturous human experiments in concentration camps during the war
- Codified many of our standard principles of ethical research, including appropriately **balancing risk and potential benefits**

## Free, Prior, and Informed Consent (FPIC)

- Free
	- all participation is **voluntary**
	- free from coercion or other types of influences
	- consent can be withdrawn at any time
- Prior
	- consent is given *before* the study begins or any treatment is assigned
- Informed
	- relevant **information** regarding the study, potential risks and benefits, alternatives, etc. is conveyed in a way that would be clearly understood by potential study participants

### Example. Tuskegee Syphilis Study

- Original goal:
	- Study the natural (long-term) progression of syphilis.
- Sample:
	- 400 African American men from Alabama known to be infected with syphilis in 1932
- Study:
	- Participants were told study would last 6 months but monitored for over 40 years
	- Participants were never informed of (and often misled about) their condition.
	- Participants were denied treatment even after a cure (penicillin) was discovered in 1947.
- Outcome:
	- By 1972, 128 participants had died (28 directly and 100 indirectly from syphilis) and 40 wives and 19 infants were infected.

#### What was wrong with this study?

- Failed **prior/informed standard**
	- Subjects not given appropriate information about study or risks vs. benefits
- Failed **free standard**
	- Subjects not given opportunity to opt out
- Violated **ethical codes**
	- Subjects not given access to known and available life-saving treatments (risks vs. benefits)
	- Why were the subjects African American?

# Ethical to Use Unethical Data?

- Usually, no. Sometimes, yes, but in rare cases.
- Some instances when there are no alternatives to collecting data in a more ethical way:
	- If the benefit is large enough (e.g., saving many human lives), then it may be appropriate to use data from unethical sources

# Other important considerations

- Permission and consent
- Respect for terms of services (for APIs, web scraping especially)
- Data ownership and attribution
- Data privacy and security
	- Anonymize or aggregate sensitive information