## Installation the project

Clone the project

```bash
git clone https://github.com/utkukocaa/EVA-trade-game.git
```

Install the dependencies

```bash
 npm install
```

## Usage

Start to project

```bash
 npm start
```

In order to run tests

```bash
 npm test
```

## ENDPOINTS

**POST /api/v1/users/register**

| Payloads | Types  | Format | Required |
| :------- | :----- | :----- | :------- |
| username | String |        | Required |

**Response**

```
//Example response

{
    "username": "utkuukoca",
    "budget": 1000,
    "_id": "61f108935caa4fc6113915f5",
    "portfolio": [],
    "createdAt": "2022-01-26T08:38:43.946Z",
    "updatedAt": "2022-01-26T08:38:43.946Z"
}

```

**POST /api/v1/users/buy/:userId**

| Payloads | Types  | Format           | Required |
| :------- | :----- | :--------------- | :------- |
| name     | String |                  | Required |
| count    | Number | Positive Integer | Required |

**Response**

```
//Example response
{
    "updatedUser": {
        "_id": "61f108935caa4fc6113915f5",
        "username": "utkuukoca",
        "budget": 517.5999999999999,
        "portfolio": [
            {
                "name": "AAA",
                "count": 20,
                "_id": "61f108e25caa4fc6113915fb"
            }
        ],
        "createdAt": "2022-01-26T08:38:43.946Z",
        "updatedAt": "2022-01-26T08:40:02.820Z"
    },
    "updatedShare": {
        "_id": "61f108ab5caa4fc6113915f7",
        "name": "AAA",
        "count": 80,
        "price": 24.12,
        "createdAt": "2022-01-26T08:39:07.430Z",
        "updatedAt": "2022-01-26T08:40:03.010Z"
    }
}

```

**POST /api/v1/users/sell/:userId**

| Payloads | Types  | Format           | Required |
| :------- | :----- | :--------------- | :------- |
| name     | String |                  | Required |
| count    | Number | Positive Integer | Required |

**Response**

```
//Example response
{
    "updatedUser": {
        "_id": "61f108935caa4fc6113915f5",
        "username": "utkuukoca",
        "budget": 565.8399999999999,
        "portfolio": [
            {
                "name": "AAA",
                "count": 18,
                "_id": "61f108e25caa4fc6113915fb"
            }
        ],
        "createdAt": "2022-01-26T08:38:43.946Z",
        "updatedAt": "2022-01-26T08:40:38.134Z"
    },
    "updatedShare": {
        "_id": "61f108ab5caa4fc6113915f7",
        "name": "AAA",
        "count": 82,
        "price": 24.12,
        "createdAt": "2022-01-26T08:39:07.430Z",
        "updatedAt": "2022-01-26T08:40:38.338Z"
    }
}

```

**POST /api/v1/share/add**

| Payloads | Types  | Format             | Required |
| :------- | :----- | :----------------- | :------- |
| name     | String | 3 uppercase letter | Required |
| count    | Number | Positive Integer   | Required |

**Response**

```
//Example response
{
    "name": "AAA",
    "count": 100,
    "price": 24.12,
    "_id": "61f108ab5caa4fc6113915f7",
    "createdAt": "2022-01-26T08:39:07.430Z",
    "updatedAt": "2022-01-26T08:39:07.430Z"
}

```
