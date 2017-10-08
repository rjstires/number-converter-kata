//- Courtesy of James Grenning (@jwgrenning) and Jeff Langr (@jlangr)
//- Use this to learn TDD

class NumberConverter {

    static String toWords(int number) {
        String word = "";
        
        switch(number) {
            case 0:
                word = "zero";
                break;
            case 1: 
                word = "one";
                break;
            case 9: 
                word = "nine";
                break;
        }

        return word; 
    }
}