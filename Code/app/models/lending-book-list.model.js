module.exports = (sequelize, Sequelize) => {
    const LendingBookList = sequelize.define("bookitem", {
        LendingID: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            references: 'lendinglist',
            referencesKey: 'LendingID',
        },
        BookItemID: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            references: 'bookitem',
            referencesKey: 'BookItemID',
        },
    });

    return LendingBookList;
};