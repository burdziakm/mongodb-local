// noinspection JSCheckFunctionSignatures

print("################################################################");
print("### MONGO-INIT.JS: STARTING DATABASE INITIALIZATION ###");
print("################################################################");

// 1. Database setup
var dbName = "test";
var db = db.getSiblingDB(dbName);
print("### Using database: " + dbName);

// 2. Creating a collection (to force database creation)
try {
    db.createCollection("init");
    print("### SUCCESS: Collection 'init' has been created.");
} catch (error) {
    print("### ERROR: Failed to create collection 'init'. Reason: " + error);
}

// 3. Creating user
try {
    var user = "local_user";
    // Check if the user already exists to avoid the 'Duplicate Key' error
    var userExists = db.getUser(user);

    if (userExists) {
        print("### INFO: User '" + user + "' already exists. Skipping creation.");
    } else {
        db.createUser({
            user: user,
            pwd: "local_pass",
            roles: [
                { role: "readWrite", db: dbName }
            ]
        });
        print("### SUCCESS: User '" + user + "' has been created.");
    }
} catch (error) {
    print("### ERROR: Failed to create user. Reason: " + error);
}

print("################################################################");
print("### MONGO-INIT.JS: SCRIPT COMPLETED ###");
print("################################################################");