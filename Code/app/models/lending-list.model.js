module.exports = (sequelize, Sequelize) => {
    const LendingList = sequelize.define("lendinglist", {
        LendingID: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        AccountID: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            references: 'account',
            referencesKey: 'AccountID',
        },
        CreateDate: {
            type: Sequelize.DATE,
        },
        DueDate: {
            type: Sequelize.DATE,
        },
        ReturnDate: {
            type: Sequelize.DATE,
        },
        Status: {
            type: Sequelize.STRING,
        },
    });

    return LendingList;
};