package rocks.mcnichol.cryptopals.cryptopalsjavabackend;

import org.junit.Before;
import org.junit.Test;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.bind.annotation.RestController;

import static org.junit.Assert.assertTrue;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class ChallengeControllerTest {

    MockMvc mockMvc;

    @Before
    public void setUp() {
        mockMvc = MockMvcBuilders.standaloneSetup(new ChallengeController()).build();
    }

    @Test
    public void isAnnotatedWithSpringStereotuype() {
        assertTrue(ChallengeController.class.isAnnotationPresent(RestController.class));
    }

    @Test
    public void setOneChallengeOneRespondsOkWhenCalled() throws Exception {
        mockMvc.perform(get("/challenges/1/sets/1")).andExpect(status().isOk());
    }
}