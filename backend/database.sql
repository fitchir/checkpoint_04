CREATE TABLE `social`.`user` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) UNIQUE NOT NULL,
  `hashedPassword` VARCHAR(200) NOT NULL,
  -- `coverPic` VARCHAR(100) NOT NULL,
  -- `profilePic` VARCHAR(100) NOT NULL,
  -- `city` VARCHAR(45) NOT NULL,
  -- `website` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`user_id`)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

    CREATE TABLE post {
      `post_id` INT NOT NULL AUTO_INCREMENT,
       `user_id` INT NOT NULL,
      `img` VARCHAR(255),
       `description` TEXT(500) NOT NULL,

    }