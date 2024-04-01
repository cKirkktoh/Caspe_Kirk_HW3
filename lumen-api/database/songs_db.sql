-- Create database
CREATE DATABASE IF NOT EXISTS songs_db;
USE songs_db;

-- Create table
CREATE TABLE IF NOT EXISTS songs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    artist VARCHAR(255),
    album VARCHAR(255),
    duration VARCHAR(10)
);

-- Insert sample data
INSERT INTO songs (title, artist, album, duration) VALUES
('Song 1', 'Artist 1', 'Album 1', '3:45'),
('Song 2', 'Artist 2', 'Album 2', '4:20'),
('Song 3', 'Artist 3', 'Album 3', '2:55');
