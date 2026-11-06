DROP TABLE IF EXISTS diary;

CREATE TABLE diary (
    id INT GENERATED ALWAYS AS IDENTITY,
    date DATE,
    time TIME,
    text VARCHAR (5000),
    category VARCHAR (50),
    PRIMARY KEY (id)
);

INSERT INTO diary (date, time, text, category)
VALUES
(
    '2026-10-25',
    '08:30:00',
    'Started the morning with a cup of coffee and a short walk around the park. The weather was crisp but sunny, and I felt refreshed and ready for the day.',
    'Personal'
),
(
    '2026-10-26',
    '18:45:00',
    'Had a productive day at work. Finally completed the project I have been working on for the past two weeks. Feeling proud of what I accomplished.',
    'Work'
),
(
    '2026-10-27',
    '20:15:00',
    'Met up with Sarah and James for dinner at our favourite Italian restaurant. We laughed about old memories and made plans for a weekend trip.',
    'Social'
),
(
    '2026-10-28',
    '07:00:00',
    'Went for a 5km run this morning. It was challenging at first, but I managed to beat my previous time. Slowly getting closer to my fitness goals.',
    'Health'
),
(
    '2026-10-29',
    '21:30:00',
    'Spent the evening reading a fascinating book about space exploration. It reminded me how much there is still to discover about the universe.',
    'Hobbies'
),
(
    '2026-10-30',
    '14:20:00',
    'Had a video call with my family today. Everyone seems to be doing well. We talked about organising a family gathering before Christmas.',
    'Family'
),
(
    '2026-11-01',
    '19:00:00',
    'Tried cooking homemade Thai curry for the first time. It turned out surprisingly well! I might experiment with more recipes next weekend.',
    'Food'
),
(
    '2026-11-02',
    '22:10:00',
    'Feeling a little overwhelmed with everything happening lately. Decided to write down my thoughts and focus on the things I can control.',
    'Reflection'
),
(
    '2026-11-04',
    '16:40:00',
    'Visited a local art gallery this afternoon. The photography exhibition was inspiring and gave me some creative ideas for my own projects.',
    'Leisure'
),
(
    '2026-11-06',
    '09:15:00',
    'Woke up feeling motivated today. Made a list of personal goals for the rest of the year, including learning a new skill and spending more time outdoors.',
    'Goals'
);