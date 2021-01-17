export default function errorHandler(errorNum) {
    switch (errorNum) {
        case '400':
            return `Необходимо ввести данные`;
        case '401':
            return `Неверный токен`;
        case '404':
            return `Данные не найдены`;
        case 'Failed to fetch':
            return `Ошибка запроса`;
        default:
            return `Неизвестная ошибка`;
      }
}
