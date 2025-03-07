export const StatusEnum: { [x: string]: string } = {
    'created': 'Получено резюме',
    'due_interview': 'Ожидает собеседования',
    'accepted': 'Кандидат принят',
    'rejected': 'Кандидат отклонен',
}
interface EBigInt extends BigInt{
    /** Convert to BigInt to string form in JSON.stringify */
    toJSON: () => number;
}
(BigInt.prototype as EBigInt).toJSON = function () {
    return parseInt(this.toString());
};