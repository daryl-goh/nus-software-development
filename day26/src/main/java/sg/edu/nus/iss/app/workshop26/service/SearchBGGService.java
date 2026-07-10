package sg.edu.nus.iss.app.workshop26.service;

import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sg.edu.nus.iss.app.workshop26.models.Comment;
import sg.edu.nus.iss.app.workshop26.models.Game;
import sg.edu.nus.iss.app.workshop26.repository.CommentRepository;
import sg.edu.nus.iss.app.workshop26.repository.GameRepository;

@Service
public class SearchBGGService {

    @Autowired
    private GameRepository gameRepo;

    @Autowired
    private CommentRepository commentRepo;

    public List<Game> searchGame(Integer limit, Integer offset) {
        return (List<Game>) gameRepo.search(limit, offset);
    }

    public List<Game> getGamesByRank() {
        return (List<Game>) gameRepo.getGamesByRank();
    }

    public Game getGameDetailsById(Integer gameId) {
        return gameRepo.getGameDetailsById(gameId);
    }

    public List<Comment> searchCommentByKeyword(String s, Float f, Integer limit, Integer offset) {
        List<String> includes = new LinkedList<>();
        List<String> excludes = new LinkedList<>();
        for (String w : s.split(" ")) {
            System.out.println(w);
            if (w.startsWith("-")) {
                String[] exW = w.split("-");
                System.out.println("ex " + exW[1]);
                excludes.add(exW[1]);
            } else {
                System.out.println("in " + w);
                includes.add(w);
            }
        }
        return commentRepo.search(includes, excludes, limit, offset);
    }
}