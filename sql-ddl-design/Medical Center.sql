
DROP DATABASE IF EXISTS medical_db;

CREATE DATABASE medical_db;
\c medical_db;

CREATE TABLE doctors (
id SERIAL PRIMARY KEY,
first_name TEXT NOT NULL,
last_name TEXT NOT NULL,
category TEXT NOT NULL,
office_time TIMESTAMP
);


CREATE TABLE patients(
id SERIAL PRIMARY KEY,
first_name TEXT NOT NULL,
last_name TEXT NOT NULL,
diseases_id INTEGER,
phone_number VARCHAR(15),
);

CREATE TABLE diseases(
id SERIAL PRIMARY KEY,
name TEXT NOT NULL
);


CREATE TABLE patient_doctor (
    patient_id INTEGER REFERENCES patients(id) ON DELETE CASCADE,
    doctor_id INTEGER REFERENCES doctors(id) ON DELETE CASCADE,
    PRIMARY KEY (patient_id, doctor_id)
);

CREATE TABLE patient_diseases (
    patient_id INTEGER REFERENCES patients(id) ON DELETE CASCADE,
    disease_id INTEGER REFERENCES diseases(id) ON DELETE SET NULL,
    PRIMARY KEY (patient_id, disease_id)
);

--
--doctors
---
--id PK
--first_name
--last_name
--category
--office_time
--
--patients
---
--id PK
--first_name
--last_name
--diseases_id
--phone_number
--
--diseases
---
--id PK
--name
--
--patient_doctor
---
--patient_id PK FK - patients.id
--doctor_id PK FK - doctors.id
--
--patient_diseases
---
--patient_id PK FK - patients.id
--disease_id PK FK - diseases.id