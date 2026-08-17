import java.sql.*;

public class JDBCTest {
  public static void main(String[] args) {

    String url = "jdbc:mysql://localhost:3306/jdbctest";
    String username = "root";
    String password = "Subhas@263151";
    String query = "SELECT * FROM student";

    try (
        Connection c = DriverManager.getConnection(url, username, password);
        Statement s = c.createStatement();
        ResultSet r = s.executeQuery(query)) {

      System.out.println("Connected To the Database Successfully!");

      while (r.next()) {
        System.out.println("--------------------------------");
        System.out.println("ID: " + r.getInt("id"));
        System.out.println("NAME: " + r.getString("name"));
        System.out.println("MARKS: " + r.getInt("marks"));
        System.out.println("GRADE: " + r.getString("grade"));
        System.out.println("STATE: " + r.getString("state"));
      }

    } catch (SQLException e) {
      e.printStackTrace();
    }

    // retrive from DB

    // String url = "jdbc:mysql://localhost:3306/jdbctest";
    // String username = "root";
    // String password = "Subhas@263151";

    // String query = "select * from student;";

    // try {

    // // Class.forName("com.mysql.jdbc.Driver");
    // // Loading class `com.mysql.jdbc.Driver'. This is deprecated.
    // // The new driver class is `com.mysql.cj.jdbc.Driver'.
    // // The driver is automatically registered via the SPI.
    // // manual loading of the driver class is generally unnecessary.

    // Class.forName("com.mysql.cj.jdbc.Driver");
    // System.out.println("Drivers are loaded successfully !");
    // } catch (ClassNotFoundException e) {
    // System.out.println(e.getMessage());
    // }

    // try {
    // Connection con = DriverManager.getConnection(url, username, password);
    // System.out.println("Connection Established Successfully !");

    // Statement stmt = con.createStatement();
    // ResultSet rs = stmt.executeQuery(query);

    // while (rs.next()) {
    // int id = rs.getInt("id");
    // String name = rs.getString("name");
    // int marks = rs.getInt("marks");
    // String grade = rs.getString("grade");
    // String state = rs.getString("state");

    // System.out.println();
    // System.out.println("----------------------------");
    // System.out.println();

    // System.out.println("ID: " + id);
    // System.out.println("NAME: " + name);
    // System.out.println("MARKS: " + marks);
    // System.out.println("GRADE: " + grade);
    // System.out.println("STATE: " + state);
    // }

    // rs.close();
    // stmt.close();
    // con.close();

    // } catch (SQLException e) {
    // System.out.println(e.getMessage());
    // }

    // insertion on DB

    // String url = "jdbc:mysql://localhost:3306/jdbctest";
    // String username = "root";
    // String password = "Subhas@263151";
    // String query = "insert into student (id,name,marks,grade,state) values
    // (6,'BISWAS',77,'A','UK');";

    // try {
    // Class.forName("com.mysql.cj.jdbc.Driver");
    // System.out.println("Drivers Loaded Successfully !");
    // } catch (ClassNotFoundException e) {
    // System.out.println(e.getMessage());
    // }

    // try {

    // Connection c = DriverManager.getConnection(url, username, password);
    // System.out.println("Connected to the Database Successfully !");

    // Statement s = c.createStatement();
    // int row = s.executeUpdate(query);
    // System.out.println("Total " + row + " Rows Effected !");
    // System.out.println("Insertion Successfully !");

    // System.out.println();
    // s.close();
    // c.close();

    // System.out.println("Connections Closed Successfully !");

    // } catch (SQLException e) {
    // System.out.println(e.getMessage());
    // }

    // delete from DB

    // String url = "jdbc:mysql://localhost:3306/jdbctest";
    // String username = "root";
    // String password = "Subhas@263151";
    // String query = "delete from student where id = 6;";

    // try {
    // Class.forName("com.mysql.cj.jdbc.Driver");
    // System.out.println("Drivers Loaded Successfully !");
    // } catch (ClassNotFoundException e) {
    // System.out.println(e.getMessage());
    // }

    // try {

    // Connection c = DriverManager.getConnection(url, username, password);
    // System.out.println("Connected to the Database Successfully !");

    // Statement s = c.createStatement();
    // int row = s.executeUpdate(query);
    // System.out.println("Total " + row + " Rows Effected !");
    // System.out.println("Deleted Successfully !");

    // System.out.println();
    // s.close();
    // c.close();

    // System.out.println("Connections Closed Successfully !");

    // } catch (SQLException e) {
    // System.out.println(e.getMessage());
    // }

  }
}
