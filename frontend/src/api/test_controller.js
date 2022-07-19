import axios from "axios";

const URI = 'https://bestcycling-public.s3.eu-west-1.amazonaws.com/api-test/db.json';

export const getData = async () => {

    const res = await axios.get(URI);

    return res.data;

}

export const findClasses = (data, limit) => {

    let classes = data.training_classes
        .sort((a, b) => a.published > b.published ? 1 : -1)

    classes = limit ? classes.slice(0, limit) : classes;

    return switchInstructor(classes, data.instructors);

}

export const getOne = async (id) => {

    const data = await getData();

    const clazz = data.training_classes.filter(clazz => clazz.id == id)[0];

    return switchInstructor([clazz], data.instructors)[0];

}

export const switchInstructor = (classes, instructors) => {

    return classes.map(clazz => {
            const instructor = instructors.filter(instructor => instructor.id === clazz.instructor_id)[0];
            clazz.instructor_id = instructor.name;

            return clazz;
        });

}

export const formatDate = (seconds) => {

    const formatter = new Intl.DateTimeFormat('es', { day: "numeric", month: "short", year: "numeric" });
    const time = formatter.format(new Date(seconds));

    return time
        .split(' ')
        .map((word, index) => index === 1 ? `${word[0].toUpperCase()}${word.substring(1)}` : word)
        .join(' ');

}
