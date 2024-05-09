package main;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.URL;
import java.net.URLEncoder;

String token = "Your API Key";
String url = URLEncoder.encode("https://google.com");
int width = 1920;
int height = 1080;
String output = "image";

String query = "https://shot.screenshotapi.net/screenshot";
query += String.format("?token=%s&url=%s&width=%d&height=%d&output=%s",
token, url, width, height, output);
URL apiUrl = new URL(query);

InputStream inputStream = apiUrl.openStream();
OutputStream outputStream = new FileOutputStream("./screenshot.png");
inputStream.transferTo(outputStream);

inputStream.close();
outputStream.close();