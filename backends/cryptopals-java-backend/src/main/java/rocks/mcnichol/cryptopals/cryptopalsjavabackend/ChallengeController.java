package rocks.mcnichol.cryptopals.cryptopalsjavabackend;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ChallengeController {

    @RequestMapping("/challenges/1/sets/1")
    public ResponseEntity<String> challenge1Set1(){
        return new ResponseEntity<>("Hello from Java", HttpStatus.OK);
    }
}
