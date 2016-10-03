/*************************************************************************
 * Name: Kevin Hou
 * NetID: kevinch
 * Precept: P06
 *
 * Description: Plays a tone of given frequency for a given duration.
 *
 * Dependencies: StdAudio.java
 *
 * Compilation:
 *  % javac-introcs PlayNote.java
 * Execution:
 *  % java-introcs PlayNote 440.0 3.0
 *************************************************************************/
public class PlayNote {
    public static double[] tone(double hz, double duration) {
        int n = (int) (44100 * duration); // Number of points in the wave
        double[] a = new double[n+1]; // Size of the array
        for (int i =0; i <= n; i++) {
            a[i] = Math.sin(2 * Math.PI * i * hz / 44100); // Determine pitch
        }
        return a;
    }
    public static void main(String[] args) {
        double hz = Double.parseDouble(args[0]);
        double duration = Double.parseDouble(args[1]);
        double[] a = tone(hz, duration);
        StdAudio.play(a); // Play sound
    }
}