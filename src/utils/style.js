export const GetPercentage = (current, total) => Math.ceil(((current / total) * 100));

export const GetQuizQuestionIndexes = (length, total) => {
    const array = [...Array(total).keys()]
    return array.sort(() => { return .5 - Math.random() }).slice(0, length)
}