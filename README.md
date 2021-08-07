# Deployment
Deployment is done using docker-compose for environmet uniformity.
Please make sure you have latest Docker engine and docker-compose, that ports 3000 and 3306 are not in use, and follow the instructions below:
1. Open a terminal.
2. Navigate to the main app directory, where `docker-compose.yml` resideds.
3. Run `docker-compose build`. It may take a few minutes - please be patient.
4. Run `docker-compose up`.
5. Follow the logs in your terminal. Once you see `app_1 | Listening at http://127.0.0.1:3000` you are ready to go.
6. Open your browser and navigate to http://localhost:3000.

# Database Considerations
Since the data entities are well defined, logically connected, and require data integrity due to their sensitivity (transactions), I decided to go for a relational database.\
Scalability-wise, even if the system will handle 10k transactions per day, it sums up to 18,250,000 transactions per 5 years which is something MySQL can handle well.\
I proposed a very simple schema that contains only Transactions and Customers. In a more complex app I would normalize the data by creating tables for countries, cc types, currencies, etc., and would let the user choose from an enclosed list. That way I would ensure the data validity, and utilize the benefits of quering a relational database.\
**Due to foreign key constraint, create/update transactions are only allowed if customer already exists in `customers` table**

# TODO
- Data validation in Client & Server
- Form id_customer suggestion
- Create reusable row, form, etc.
- Error handling in Client & Server
- Customers CRUD
- Customers map view
